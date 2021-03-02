import Header from "./header"

export const siteTitle = "Weather"

export default function Layout({ children }) {
  return (
    <div id="main">
      <div className="backgroundSunnyBlur">
        <div className="backgroundSunny">
          <div id="content">
            <Header></Header>
            <div id="main_children">
              <main>{children}</main>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
}
