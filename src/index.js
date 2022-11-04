import './sass/style.scss'
import { initGopherAnimation} from './script-modules/gopher-animation'
import {populateMain} from './script-modules/populate-main'
import { initStyleInputOnFocus} from './script-modules/style-search-input-on-focus'
import { initSearchAndFiltering} from './script-modules/search-and-filtering'
import { initAnimateOnScroll} from './script-modules/animate-on-scroll'
import { initThemeToggling} from './script-modules/theme-toggle'


populateMain()
initAnimateOnScroll()
initSearchAndFiltering()
initThemeToggling()
initStyleInputOnFocus()
initGopherAnimation()


