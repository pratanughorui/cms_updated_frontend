import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    // Set the initial value based on the current window size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Menus = [
    {
      title: 'Create Conference',
      src: 'Chart_fill',
      path: '/create-conference',
    },
    {
      title: 'Select Conference',
      src: 'Chat',
      path: '/select-conference',
      subMenu: [
        { title: 'Committee', path: '/committee' },
        { title: 'Members', path: '/Members' },
        { title: 'Track', path: '/tracks' },
        { title: 'Reviewers', path: '/select-conference/sub4' },
        { title: 'Check Plagiarism', path: '/select-conference/sub5' },
        { title: 'Send for Copyright', path: '/select-conference/sub6' },
        { title: 'Author Registration', path: '/select-conference/sub7' },
      ],
    },
    // Add more menus with submenus as needed
    { title: 'Reviewer Invitation', src: 'User', path: '/reviewer-invitation' },
    { title: 'Allot Paper', src: 'Calendar', path: '/allot-paper' },
    { title: 'Review Format', src: 'Search', path: '/review-format' },
    { title: 'Report', src: 'Chart', path: '/report' },
  ];

  const toggleSubMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="flex">
      <div className={` ${open ? 'w-72' : 'w-20 '} bg-dark-purple h-screen p-5 pt-8 relative duration-300`}>
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index} className="relative">
              <Link to={Menu.path}><div
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}`}
                onClick={() => toggleSubMenu(index)}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </div></Link>
              {Menu.subMenu && activeMenu === index && (
                <ul className={`${!open && 'hidden'} pl-12 mt-2 space-y-2`}>
                  {Menu.subMenu.map((subMenuItem, subIndex) => (
                    <li key={subIndex} className={`text-gray-300 text-sm ml-4`}>
                      <Link to={subMenuItem.path} className={`hover:text-white`}>
                        {subMenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li> 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
