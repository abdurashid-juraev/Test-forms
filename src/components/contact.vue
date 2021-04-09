<template>
  <form>
    <div class="row">
      <div class="col-xs-12">
        <h1>Contact us</h1>
        <hr />
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model.lazy="formData.name"
          />
          {{ formData.name }}
        </div>

        <hr />
        <div class="form-group">
          <label for="name">Lastname</label>
          <input
            type="lastname"
            id="lastname"
            class="form-control"
            v-model="formData.lastname"
          />
        </div>
        <hr />
        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            class="form-control"
            v-model="formData.subject"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            id="message"
            rows="3"
            v-model="formData.message"
          >
          </textarea>
        </div>
        <div class="form-group">
          <label>Newsletter</label>
          <input
            id="newsletter"
            type="checkbox"
            v-model="formData.newsletter"
          />
          {{ formData.newsletter }}
        </div>
        <div class="form-group">
          <label>Promotions</label>
          <input
            id="promotions"
            type="checkbox"
            v-model="formData.promotions"
          />
          {{ formData.promotions }}
        </div>
        <div class="form-group">
          <label for="human">
            <input
              type="radio"
              id="human"
              value="human"
              v-model="formData.gander"
            />
            Human
          </label>
        </div>
        <div class="form-group">
          <label for="alien">
            <input
              type="radio"
              id="alien"
              value="alien"
              v-model="formData.gander"
            />Alien
          </label>
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <select class="form-control" id="country" v-model="formData.country">
            <option v-for="(country, index) in countries" :key="index">
              {{ country }}
            </option>
          </select>
        </div>
        <button class="btn btn-primary" @click.prevent="submitForm">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      countries: ["USA", "UK", "UAE", "RUSSIA"],
      formData: {
        name: "",
        lastname: "",
        subject: "",
        message: "Some text",
        newsletter: "",
        promotions: "",
        gander: "alien",
        country: "USA",
      },
      methods: {
        submitForm() {
          console.log(this.formData);
          console.log(JSON.stringify(this.formData));
        },
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formData);
      console.log(JSON.stringify(this.formData));
    },
  },
};
</script>
<style>
form {
  margin-bottom: 50px;
}
</style>