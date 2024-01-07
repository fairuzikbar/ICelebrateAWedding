import { useState, useEffect } from "react";
import { supabaseClient } from "../api/supabaseClient";

import moment from "moment";
import "moment/dist/locale/id";
import Messages from "./message";

export default function Greeting() {
  // const supabaseClient = SupabaseClient;
  const [showGreetings, getGreetings] = useState([]);
  // const [showCounts, getCounts] = useState([]);
  const [name, setName] = useState("");
  const [greets, setGreets] = useState("");
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    getGreeting();
    // getCount();
  }, []);

  async function getGreeting() {
    const { data } = await supabaseClient
      .from("chatbox")
      .select("*")
      .order("id", { ascending: false });
    getGreetings(data);
    const chat_subscription = supabaseClient
      .channel("any")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "chatbox",
        },
        (payload) => {
          const newRecord = payload.new;
          getGreetings((prev) => [newRecord, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabaseClient.removeSubscription(chat_subscription);
    };
  }

  // async function getCount() {
  //   const { count } = await supabaseClient.from("chatbox")
  //     .select('*', { count: 'exact', head: true })
  //   getCounts(count);
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    await setGreeting(name, greets, confirmation);
    // Clear form inputs after submission
    setName("");
    setGreets("");
    setConfirmation("");
  }

  async function setGreeting(name, greetings, confirmation) {
    const { data, error } = await supabaseClient
      .from("chatbox")
      .insert([
        {
          name: name,
          greetings: greetings,
          confirmation: confirmation,
          insert_date: new Date(),
        },
      ])
      .select();
  }

  return (
    <>
      <section id="greeting" className="position-relative py-xl-5 py-5">
        <div className="container position-relative">
          <h1
            className="fw-bold text-center mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Greetings
          </h1>
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <div className="card mb-5">
                <div className="card-body p-sm-5">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nama Anda"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="greets"
                        name="message"
                        rows={6}
                        placeholder="Tuliskan ucapan dan doa"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                        required
                        value={greets}
                        onChange={(e) => setGreets(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="row">
                        <div className="col">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="hadir"
                              name="confirmation"
                              value="Hadir"
                              checked={confirmation === "Hadir"}
                              onChange={(e) => setConfirmation(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hadir"
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                              name="confirmation"
                            >
                              Hadir
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              id="tidakHadir"
                              name="confirmation"
                              value="Tidak Hadir"
                              checked={confirmation === "Tidak Hadir"}
                              onChange={(e) => setConfirmation(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="tidakHadir"
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                              name="confirmation"
                            >
                              Tidak Hadir
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn btn-dark d-block w-100"
                        type="submit"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Kirim
                      </button>
                    </div>
                  </form>
                </div>
                <hr style={{ borderWidth: "1px", borderStyle: "solid" }} />
                <div className="card-body p-sm-4 scroll-container">
                  {showGreetings.length === 0 ? (
                    <h5 className="text-center">Belum ada ucapan gaes</h5>
                  ) : (
                    <>
                      {showGreetings.map((showGreeting) => (
                        <Messages
                          key={showGreeting.id}
                          name={showGreeting.name}
                          greetings={showGreeting.greetings}
                          confirmation={showGreeting.confirmation}
                          insert_date={moment(
                            new Date(showGreeting.insert_date)
                          ).fromNow()}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container position-relative">
          <h4
            className="fw-bold text-center mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ucapan
          </h4>
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <div className="card mb-5 scroll-container">
                <div className="card-body p-sm-5 ">
                  {showGreetings.length === 0 ? (
                    <h5 className="text-center">Belum ada ucapan gaes</h5>
                  ) : (
                    <>
                      {showGreetings.map((showGreeting) => (
                        <Messages
                          key={showGreeting.id}
                          name={showGreeting.name}
                          greetings={showGreeting.greetings}
                          confirmation={showGreeting.confirmation}
                          insert_date={moment(
                            new Date(showGreeting.insert_date)
                          ).fromNow()}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
