<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      id="name"
      v-model="formGroup.props.firstName"
      type="text"
      name="name"
    />
   valid: {{ formGroup.controls.firstName.valid }}<br/>
    {{ formGroup.controls.firstName.invalid }}<br/>
    {{ formGroup.controls.firstName.dirty }}<br/>
    {{ formGroup.controls.firstName.errorMessage }}<br/>
  <p v-if="formGroup.controls.firstName.errorMessages.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in formGroup.controls.firstName.errorMessages">{{ error }}</li>
    </ul>
  </p>
<h1>
FormGroup
</h1>
{{ formGroup.valid }}<br/>
    {{ formGroup.invalid }}<br/>
    {{ formGroup.dirty }}<br/>
    {{ formGroup.isModified }}<br/>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the aaa
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
export class UserInfo{
@required({message:"this is required"})
firstName:string;

}
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
   formGroup:IFormGroup<UserInfo>;
  formBuilder:RxFormBuilder = new RxFormBuilder();
  constructor(){
    super();
this.formGroup = this.formBuilder.formGroup(UserInfo) as IFormGroup<UserInfo>
console.log(this.formGroup);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
