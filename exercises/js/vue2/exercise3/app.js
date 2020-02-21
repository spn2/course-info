let app = new Vue({
  el: "#app",
  template: `
  <div>
      <button
      v-for="text in texts"
      v-bind:key="text.language"
      v-bind:class="['tab-button', { active: current.language === text.language }]"
      v-on:click="current = text"
    >
    {{ text.language }}
    </button>
    <div class="tab">
      <p  class="clickable" title="double click to edit"
        v-for="p,index in current.paragraphs"
        v-bind:key="current.language + index"
      >{{ p }}
      </p>
      
    </div>
  </div>
  `,
  data: {
      texts: texts,
      current: texts[0]
  }
})