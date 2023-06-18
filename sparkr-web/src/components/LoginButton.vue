<template>
  <div>
    <center class="box">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="input-field"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="input-field"
      />
    </center>

    <button @click="login" class="button">Get Started</button>
  </div>
</template>

<script>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const store = useStore();

    const auth = inject("auth"); // get the auth instance
    const login = async () => {
      try {
        const signInMethods = await fetchSignInMethodsForEmail(
          auth,
          email.value
        );
        if (signInMethods.length === 0) {
          // No user record corresponds to this email, create a new user.
          await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
          );

          // Call the API to create a new user in your own database
          const response = await fetch("http://Pleasejustworksparkr-env.eba-ttdm78vz.us-west-1.elasticbeanstalk.com/api/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: "user",
              email: email.value,
            }),
          });

          const data = await response.json();
          store.commit('setUserId', data.user_id);
          console.log(`userId: ${data}`);
        } else {
          // User exists, log them in.
          await signInWithEmailAndPassword(auth, email.value, password.value);
        }

        router.push("/dash");
      } catch (error) {
        console.error(error);
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>


<style scoped>
.input-field {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  border: none;
  height: 40px;
  width: 250px;
  border-radius: 10px;
}

.button {
  height: 60px;
  width: 250px;
  background-color: #384650;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
