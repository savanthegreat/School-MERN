import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <br />
      <h2>
        Please Fill up the form below. <br /> We will contact You soon.
      </h2>
      <form action="action_page.php">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">India</option>
          <option value="canada">Out of India</option>
          <option value="usa">Out of World</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
