import classNames from './utils'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const buttons = [
    { name: 'Home', current: true },
    { name: 'Play', current: false },
    { name: 'Shop', current: false },
  ]

function PageSwitcher(pathname: string)
{
  var page: HTMLElement | null
  for (let button of buttons)
  {
    console.log(pathname);
    
    if (`/${button.name}` === pathname || (pathname === "/" && button.name === 'Home'))
      button.current = true;
    else if (button.current === true && `/${button.name}` !== pathname)
      button.current = false;
  }
}

function NavbarMenu()
{
    let location = useLocation()
    PageSwitcher(location.pathname)
    return (
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block">
                  <div className="flex">
                    {buttons.map((item) => (
                      <Link
                        to={item.name === 'Home' ? "/" : "/" + item.name}
                        id={item.name}
                        key={item.name}
                        className={classNames(
                          item.current ? 'bg-gold text-black' : 'text-white  hover:text-gold',
                          'px-4 py-4  text-2xl font-medium'
                        )}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
    )

}

export default NavbarMenu 