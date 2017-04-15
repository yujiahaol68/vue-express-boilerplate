<template>
	<div class="login">
		<div class="container">
			<div class="row">
				<div class="col-md-5 col-md-offset-4 col-sm-8 col-sm-offset-2">
				<loginmodal></loginmodal>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Loginmodal from '../components/Loginmodal' 

export default {
	name: 'login',
	data () {
		return {

		}
	},
	methods: {

	},
	components: {
		Loginmodal
	}
}
</script>

<style lang="scss" scoped>

.login {
	margin: 300px auto;
}

</style>