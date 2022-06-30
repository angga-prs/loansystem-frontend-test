<template>
	<!-- <div class="container top-0 position-sticky z-index-sticky">
		<div class="row">
			<div class="col-12">
				<navbar isBtn="bg-gradient-light" />
			</div>
		</div>
	</div> -->
	<main class="main-content mt-0">
		<div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
			style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg'); background-position: top;">
			<span class="mask bg-gradient-dark opacity-6"></span>
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 text-center mx-auto">
						<h1 class="text-white mb-2 mt-5">Welcome to the jungle !</h1>
						<p class="text-lead text-white">Use these awesome forms to create new account and continue your journey</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
				<div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
					<div class="card z-index-0">
						<div class="card-body">
							<form role="form">
								<argon-input type="email" id="email" placeholder="Email" aria-label="Email required" />
								<argon-input type="text" id="username" placeholder="UserName" aria-label="Name required" />
								<argon-input type="password" id="password" placeholder="Password" aria-label="Password required" />
								<argon-checkbox checked>
									<label class="form-check-label" for="flexCheckDefault">
										I agree the
										<a href="javascript:;" class="text-dark font-weight-bolder">Terms and
											Conditions</a>
									</label>
								</argon-checkbox>
								<div class="text-center">
									<argon-button type="button" fullWidth color="dark" variant="gradient" class="my-4 mb-2" id="button_submit" @click="register" >Sign up
									</argon-button>
								</div>
								<p class="text-sm mt-3 mb-0 text-center">
									Already have an account?
									<a href="javascript:;" class="text-dark font-weight-bolder">Sign in</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
	<app-footer />
</template>

<script>
	// import Navbar from "@/examples/PageLayout/Navbar.vue";
	import RegisterServices from "../services/RegisterServices.js";
	import AppFooter from "@/examples/PageLayout/Footer.vue";
	import ArgonInput from "@/components/ArgonInput.vue";
	import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
	import ArgonButton from "@/components/ArgonButton.vue";
	const body = document.getElementsByTagName("body")[0];

	export default {
		name: "signin",
		data() {
			return {
				signin: {
						email: "",
						username: "",
						password: "",
					}
			}
		},
		components: {
			// Navbar,
			AppFooter,
			ArgonInput,
			ArgonCheckbox,
			ArgonButton,
		},
		methods: {
			button_clicked(){
				console.log('hai')
			},
			register() {
			var data = {
				email: this.signin.email,
				username: this.signin.username
			};
			RegisterServices.create(data)
				.then(response => {
					this.register.id = response.data.id;
					console.log(response.data);
					// this.submitted = true;
				})
				.catch(e => {
					console.log(e);
				});
			},
		},
		created() {
			this.$store.state.hideConfigButton = true;
			this.$store.state.showNavbar = false;
			this.$store.state.showSidenav = false;
			this.$store.state.showFooter = false;
			body.classList.remove("bg-gray-100");
		},
		beforeUnmount() {
			this.$store.state.hideConfigButton = false;
			this.$store.state.showNavbar = true;
			this.$store.state.showSidenav = true;
			this.$store.state.showFooter = true;
			body.classList.add("bg-gray-100");
		},
	};
</script>