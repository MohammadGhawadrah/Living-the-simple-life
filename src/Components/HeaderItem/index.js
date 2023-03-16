import React from 'react'
import HeaderTitle from '../HeaderTitle'
import HeaderParghraph from '../HeaderParghraph'
import ListHeaderItem from '../ListHeaderItem'
import "./styles.css"
function HeaderItem() {
  return (
    <div>
       <header>
        <div class="container cotainer-flex">
                  <div class="site-title">
                      <HeaderTitle />               
                      <HeaderParghraph />
                  </div>

                  <nav>
                      <ul>
                      <ListHeaderItem class="curent-page"/> 
                          <ListHeaderItem />
                          <ListHeaderItem />
                      </ul>
                  </nav>
              </div>
       </header>
    </div>
  )
}

export default HeaderItem
