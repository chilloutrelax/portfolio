<template>
  <div class="contact">
    <AboutHeader headerTitle="Contact"></AboutHeader>
    <ContactForm></ContactForm>
    <BottomText
      bottomTitle="I will answer to your inquiries withing 2-3 buisness days."
      data-aos="flip-up"
      data-aos-easing="ease-in-back"
      data-aos-delay="400"
      data-aos-offset="100"
    ></BottomText>
  </div>
</template>

<script>
import AboutHeader from "@/components/Aboutme/AboutHeader";
import ContactForm from "@/components/Contact/ContactForm";
import BottomText from "@/components/etc/BottomText";

export default {
  components: {
    AboutHeader,
    ContactForm,
    BottomText,
  },
};
</script>
