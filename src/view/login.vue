<template>
	<div id="login-wrap">
		<a-row>
			<a-col :span="24" class="text-center">登陆</a-col>
			<a-col :md="{span: 8, offset: 8}" :xs="{span: 20, offset: 2}">
				<div class="components-input-demo-presuffix mrt10">
					<a-input placeholder="请输入用户名" v-model="userName" ref="userName">
						<a-icon slot="prefix" type="user" />
						<a-icon v-if="userName" slot="suffix" class="anticon-close-circle" type="close-circle" @click="emitEmptyUserName" />
					</a-input>
				</div>
			</a-col>
			<a-col :md="{span: 8, offset: 8}" :xs="{span: 20, offset: 2}">
				<div class="components-input-demo-presuffix mrt10">
					<a-input placeholder="请输入密码" v-model="password" ref="password" :type="passwordType">
						<a-icon slot="prefix" type="eye" v-show="!showPassword" @click="emitShowPassword" />
						<a-icon slot="prefix" type="eye-o" v-show="showPassword" @click="emitShowPassword" />
						<a-icon v-if="userName" slot="suffix" class="anticon-close-circle" type="close-circle" @click="emitEmptyPassword" />
					</a-input>
				</div>
			</a-col>
			<a-col :md="{span: 8, offset: 8}" :xs="{span: 20, offset: 2}">
				<a-button type="primary" class="block mrt20" :loading="isLogin" @click="doLogin">登陆</a-button>
			</a-col>
		</a-row>
  	</div>
</template>
<script>
import { User } from '@/module';
export default {
	data() {
		return {
			userName: '',
			password: '',
			passwordType: 'password',
			showPassword: false,
			isLogin: false
		}
	},
	methods: {
		doLogin() {
			const self = this;
			const postData = {
				username: self.userName,
				password: self.password
			};
			User.login(postData).then(res => {
				this.$router.push('/home');
			}, err => {
				alert(err.msg);
				console.log(err);
			})
		},
		emitEmptyUserName() {
			this.$refs.userName.focus();
			this.userName = '';
		},
		emitEmptyPassword() {
			this.$refs.password.focus();
			this.password = '';
		},
		emitShowPassword() {
			this.showPassword = !this.showPassword;
			if(this.passwordType === 'password') {
				this.passwordType = 'text';
			} else {
				this.passwordType = 'password';
			}
		}
	}
}
</script>
<style scoped>
	#login-wrap {
		padding-top: 15%
	}
	.components-input-demo-presuffix .anticon-close-circle {
		cursor: pointer;
		color: #ccc;
		transition: color 0.3s;
		font-size: 12px;
	}
	.components-input-demo-presuffix .anticon-close-circle:hover {
		color: #999;
	}
	.components-input-demo-presuffix .anticon-close-circle:active {
		color: #666;
	}
</style>
