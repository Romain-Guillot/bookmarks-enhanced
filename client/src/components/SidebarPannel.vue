<template>
  <div class="sidebar-container">
    <div class="side-child">
      <router-link to="/edition" class="add-bookmark emoji-link">Add new bookmark</router-link>
    </div>

    <div class="side-child">
      <TagList />
    </div>
    
    <div class="side-child">
      <p>Sort strategy :</p>
      <div class="md-radio">
        <input id="sort-recent" type="radio" name="sort" checked>
        <label for="sort-recent">Recent</label>
      </div>
      <div class="md-radio">
        <input id="sort-older" type="radio" name="sort" checked>
        <label for="sort-older">Older</label>
      </div>
      <div class="md-radio">
        <input id="sort-name-az" type="radio" name="sort" checked>
        <label for="sort-name-az">Title A-Z</label>
      </div>
      <div class="md-radio">
        <input id="sort-name-za" type="radio" name="sort" checked>
        <label for="sort-name-za">Title Z-A</label>
      </div>
    </div>

    <div class="side-child">
      <a v-on:click="toggleCondense" :class="'density-' + itemDensityMode + ' emoji-link'">{{itemDensityMode}}</a>
      <a class="surprise-me emoji-link" href="">Suprise me !</a>
      <a class="download-bookmarks emoji-link" href="">Download</a>
    </div>

    <div class="side-child">
      <p>Total bookmarks: 541</p>
      <p>Selected: 51</p>
      <p>Tags: 54</p>
    </div>

    <div class="side-child">
      <a class="github-link emoji-link" :href="github" target="_blank">Github</a>
    </div>
    
    <div class="side-child">
      {{ version }}
    </div>
  </div>
</template>


<script>
import TagList from './TagList'

export default {
  name: "SidebarPannel",
  data () {
    return {
      version: process.env.VUE_APP_VERSION,
      github: process.env.VUE_APP_GITHUB,
    }
  },
  components: {
    TagList
  },
  computed: {
    itemDensityMode () {
      return this.$store.state.uiConfig.condensed ?  'Expand' : 'Condense'
    }
  },
  methods: {
    toggleCondense() {
      this.$store.commit('uiConfig/toggleCondense')
    }
  }
}
</script>


<style lang="scss" scoped >
@import '../assets/style/variables.scss';
.sidebar-container {
  padding-top: 20px;
}

.side-child {
  padding: 20px 0;
}

a, p {
  display: block;
  margin: 0;
  padding: 4px 0;
}
.add-bookmark:before {
  content: "🆕";
}
.density-Condense:before {
  content: "🔽";
}
.density-Expand:before {
  content: "🔼";
}
.surprise-me:before {
  content: "🔀";
}
.download-bookmarks:before {
  content: "📁";
}
.github-link:before {
  content: "👨‍💻";
}

$md-radio-checked-color: $primary;
$md-radio-border-color: $primary;
$md-radio-size: 20px;
$md-radio-checked-size: 10px; 
$md-radio-ripple-size: 15px;


.md-radio {
    margin: 16px 0;
    
    &.md-radio-inline {
        display: inline-block;
    }

    input[type="radio"] {
        display: none;
        &:checked + label:before {
            border-color: $md-radio-checked-color;
            animation: ripple 0.2s linear forwards;   
        }
        &:checked + label:after {
            transform: scale(1);
        }
    }
    
    label {
        display: inline-block;
        min-height: $md-radio-size;
        position: relative;
        padding: 0 ($md-radio-size + 10px);
        margin-bottom: 0;
        cursor: pointer;
        vertical-align: bottom;
        &:before, &:after {
            position: absolute;            
            content: '';  
            border-radius: 50%;
            transition: all .3s ease;
            transition-property: transform, border-color;
        }
        &:before {
            left: 0;
            top: 0;
            width: $md-radio-size;
            height: $md-radio-size;
            border: 2px solid $md-radio-border-color;
        }
        &:after {
            top: $md-radio-size / 2 - $md-radio-checked-size / 2;
            left: $md-radio-size / 2 - $md-radio-checked-size / 2;
            width:$md-radio-checked-size;
            height:$md-radio-checked-size;
            transform: scale(0);
            background:$md-radio-checked-color;
        }
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
}



</style>