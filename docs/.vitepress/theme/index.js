import DefaultTheme from 'vitepress/theme-without-fonts'
import './my-fonts.css'
import 'virtual:group-icons.css'
import Layout from './Layout.vue'

export default {
    ...DefaultTheme,
    Layout
}