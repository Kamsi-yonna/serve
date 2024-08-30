<template>
  <div>
    <h1>User Authentication</h1>

    <!-- Sign Up Form -->
    <div v-if="!signUp.isSuccess">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <input
          v-model="signUpData.username"
          placeholder="Enter your username"
          required
        />
        <input
          v-model="signUpData.password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div v-if="signUp.isLoading">Signing up...</div>
      <div v-if="signUp.isError">
        Error: {{ signUp.error.response?.data.message || signUp.error.message }}
      </div>
    </div>

    <!-- Log In Form -->
    <div v-if="signUp.isSuccess">
      <p>User signed up successfully!</p>
      <h2>Log In</h2>
      <form @submit.prevent="handleLogIn">
        <input
          v-model="logInData.username"
          placeholder="Enter your username"
          required
        />
        <input
          v-model="logInData.password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <div v-if="logIn.isLoading">Logging in...</div>
      <div v-if="logIn.isError">Error: {{ logIn.error.message }}</div>
      <div v-if="logIn.isSuccess">User logged in successfully!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useAuth } from '~/composables/useAuth';

const { signUp, logIn } = useAuth();

const signUpData = ref({ username: '', password: '' });
const logInData = ref({ username: '', password: '' });

// Watch the signup mutation state to log its status
watch(signUp, (newState) => {
  console.log('Signup state:', newState);
});

const handleSignUp = async () => {
  try {
    await signUp.mutateAsync(signUpData.value);
    signUpData.value = { username: '', password: '' }; // Reset sign-up form
  } catch (error) {
    console.error('Sign up error:', error);
  }
};

// Watch the login mutation state to log its status
watch(logIn, (newState) => {
  console.log('Login state:', newState);
});

const handleLogIn = async () => {
  try {
    const user = await logIn.mutateAsync(logInData.value);
    logInData.value = { username: '', password: '' }; // Reset log-in form
    alert(`Welcome, ${user.username}!`);
  } catch (error) {
    alert('Wrong login');
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}
input {
  display: block;
  margin: 5px 0;
}
</style>
