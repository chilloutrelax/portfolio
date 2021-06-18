<template>
  <div
    class="contact container"
    data-aos="flip-down"
    data-aos-easing="ease-in-back"
    data-aos-delay="400"
    data-aos-offset="100"
  >
    <div class="col-12">
      <h2 class="contact-desc">
        If you have any futher questions, contact me by filling the contact form
        below.
      </h2>

      <form>
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Enter your name"
        />
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="5"
          placeholder="Content of your email"
        >
        </textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_bxahw35",
          "template_cz595l3",
          e.goal,
          "user_qyunODZjjy6SHwfufnn7t",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss">
.contact {
  .col-12 {
    .contact-desc {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      letter-spacing: 0.05em;
    }

    form {
      display: block;
      margin: auto;
      text-align: center;
      border-radius: 5px;
      padding: 20px;
      width: 50%;

      input[type="text"],
      [type="email"],
      textarea {
        width: 100%;
        padding: 12px;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 6px;
        resize: vertical;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
      }

      input[type="submit"] {
        background: #f4cccc;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
        color: #7c7c7c;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 50%;
      }

      input[type="submit"]:hover {
        background-color: #ffffff;
      }
    }
  }
}
</style>
