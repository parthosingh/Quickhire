import React, { useState } from "react";

function AskQuestion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextArea] = useState("");
  const [submitted, setSubmitted] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      question: textarea,
    };

    fetch("https://n8n-d9sc.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg || "Submitted successfully");
        setSubmitted(textarea);
      })
      .catch((error) => console.log("Error submitting", error));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Ask your Questions:</label>
        <br />
        <textarea
          value={textarea}
          rows="4"
          cols="50"
          required
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
        <br />
        <p>submitted Value: {submitted}</p>
      </form>
    </>
  );
}

export default AskQuestion;
