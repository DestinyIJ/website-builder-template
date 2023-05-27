import LogoIcon from "./assets/icons/logo.svg"

import { MdOutlineAddBox, MdOutlineHelpOutline, MdOutlineSettings, MdScreenRotation } from "react-icons/md"
import { TbLayout, TbPalette, TbFileDescription } from "react-icons/tb"
import { RiImageAddFill } from "react-icons/ri"
import { 
    BsChevronLeft, 
    BsChevronDown,
    BsChevronUp, 
    BsEyeFill, 
    BsTablet, 
    BsAlignBottom, BsAlignTop , 
    BsAlignCenter, BsAlignMiddle,
    BsAlignEnd,  BsAlignStart, } from "react-icons/bs"
import { AiOutlineMobile } from "react-icons/ai"
import { 
  BiDesktop, BiMobileLandscape,
  BiAlignJustify, BiAlignMiddle,
  BiAlignRight, BiAlignLeft
 } from "react-icons/bi"
import { FiPackage, FiUsers } from "react-icons/fi"
import { FaBars } from "react-icons/fa"

import { Tooltip, Accordion, Editing } from "./components"
import { faker } from '@faker-js/faker';

function App() {

  return (
    <>
      <div className="flex bg-gray-100 font-sans text-gray-900">
        {/* left sidebar */}
        <aside className='h-screen w-18 border-r border-gray-200 bg-white flex flex-col items-center'>
          <div className="h-18 w-full flex items-center justify-center border-b border-gray-200">
            <img src={LogoIcon} alt="logo" />
          </div>

          <nav className="flex flex-1 flex-col gap-y-4 pt-10">
            <a className="relative group rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50" href="#">
              <MdOutlineAddBox className="h-6 w-6 stroke-current" />
              <Tooltip>
                <p>Add elements <span className="text-gray-400">&#40;A&#41;</span></p>
              </Tooltip>
            </a>

            <a className="relative group rounded-xl p-2 text-gray-400 hover:bg-gray-100" href="#">
              <TbLayout className="h-6 w-6 stroke-current" />
              <Tooltip>
                <p>Layouts <span className="text-gray-400">&#40;Y&#41;</span></p>
              </Tooltip>
            </a>

            <a className="relative group rounded-xl p-2 text-gray-400 hover:bg-gray-100" href="#">
              <TbPalette className="h-6 w-6 stroke-current" />
              <Tooltip>
                <p>Theme <span className="text-gray-400">&#40;T&#41;</span></p>
              </Tooltip>
            </a>

            <a className="relative group rounded-xl p-2 text-gray-400 hover:bg-gray-100" href="#">
              <TbFileDescription className="h-6 w-6 stroke-current" />
              <Tooltip>
                <p>Assets <span className="text-gray-400">&#40;S&#41;</span></p>
              </Tooltip>
            </a>

            <a className="relative group rounded-xl p-2 text-gray-400 hover:bg-gray-100" href="#">
              <RiImageAddFill className="h-6 w-6 fill-current" />
              <Tooltip>
                <p>Images <span className="text-gray-400">&#40;I&#41;</span></p>
              </Tooltip>
            </a>
          </nav>

          <div className="flex flex-col items-center gap-y-4 py-10">
            <button className="relative group rounded-xl p-2 text-gray-400 hover:bg-gray-100" href="#">
              <MdOutlineHelpOutline className="h-6 w-6 stroke-current" />
              <Tooltip>
                <p>Help <span className="text-gray-400">&#40;h&#41;</span></p>
              </Tooltip>
            </button>

            <button className="relative group rounded-xl p-2 text-gray-400 hover:bg-gray-100" href="#">
              <MdOutlineSettings className="h-6 w-6 stroke-current" />
              <Tooltip>
                <p>Settings <span className="text-gray-400">&#40;I&#41;</span></p>
              </Tooltip>
            </button>

            <button className="pt-2 rounded-full overflow-hidden">
              <img className="h-10 w-10 object-cover" src={faker.image.avatar()} alt="avatar" />
            </button>
          </div>
        </aside>

        {/* navbar and content */}
        <div className="h-screen flex flex-1 flex-col">
          <header className="flex h-18 gap-x-6 items-center justify-center border-b border-gray-200 bg-white">
            <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
              <BsChevronLeft className="h-6 w-6 stroke-current text-gray-400" />
            </button>

            <button className="flex gap-x-2 items-center rounded-xl border border-gray-200 bg-gray-100 px-6 py-2">
              <div className="flex flex-col">
                <span className="text-sm">Page: Homepage - Circle</span>
                <div className="text-xs text-gray-400">https://dispainhouse.com</div>
              </div>
        
              <BsChevronDown className="h-6 w-6 stroke-current text-gray-400" />
            </button>

            <button className="flex items-center gap-x-2 justify-center rounded-xl bg-gray-100 p-2">
              <BsEyeFill className="h-6 w-6 fill-current text-gray-400" />
              <span className="text-sm font-semibold leading-6">Preview</span>
            </button>

            <div className="flex items-center gap-x-3 px-3 border-r border-l border-gray-200">
              <button className="rounded-xl bg-gray-100 p-2 text-blue-600">
                <BiDesktop className="h-6 w-6 stroke-current" />
              </button>
              <button className="rounded-xl hover:bg-gray-100 p-2 text-gray-400">
                <BsTablet className="h-6 w-6 stroke-current" />
              </button>
              <button className="rounded-xl hover:bg-gray-100 p-2 text-gray-400">
                <AiOutlineMobile className="h-6 w-6 stroke-current" />
              </button>
              <button className="rounded-xl hover:bg-gray-100 p-2 text-gray-400">
                <BiMobileLandscape className="h-6 w-6 stroke-current" />
              </button>
            </div>

            <button className="flex items-center justify-center gap-x-3 rounded-xl bg-gray-100 px-4 py-2">
              <span className="text-sm font-semibold leading-6">
                960 PX / 100%
              </span>
              <BsChevronDown className="h-6 w-6 stroke-current text-gray-400" />
            </button>

            <button className="flex items-start justify-center rounded-xl bg-gray-100 p-2">
              <FiPackage className="h-6 w-6 stroke-current text-gray-400" />
            </button>

          </header>

          <main className="flex flex-1 overflow-y-auto px-12">
            <div className="my-12 bg-white w-full">
              
              <nav className="flex items-center justify-between px-12 py-6">
                <img src={faker.image.avatarGitHub()} className="w-11 h-11" alt="" />
                <div className="flex gap-x-6">
                  <button className="rounded-full bg-blue-600 py-3 px-8 text-white">Hire Us</button>
                  <button><FaBars className="h-6 w-6 stroke-current text-gray-900" /></button>
                </div>
              </nav>

              <section className="py-16 px-12">
                <div className="group relative">
                  <Editing title={"H1 - Hero title"} />
                  <h1 className="inset-0 max-w-3xl text-5xl font-bold leading-[1.4] outline-none" contentEditable>
                    We craft digital products for business and user goals
                  </h1>
                </div>
                <p className="group relative mt-4 text-lg leading-loose text-gray-400 outline-none" contentEditable>
                  <Editing title={"P - Hero subtitle"} />
                  Help find solutions with UI/UX designs that are intuitive and in accordance with client business goals.
                  We provide high-quality service in UI/UX Design and Development
                </p>
                <div className="flex items-center gap-4 pt-8">
                  <button className="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">Let's work together</button>
                  <button className="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">Check our work</button>
                </div>
              </section>

              <section className="bg-gray-50 py-16 px-12">
                <span className="text-sm uppercase text-gray-400">
                  Our Projects
                </span>
                <div className="flex items-center justify-between">
                  <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">Our latest cool project</h2>
                  <button className="rounded-full bg-white px-8 py-5 font-semibold text-blue-600">Check our work</button>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className=" aspect-square overflow-hidden">
                    <img src={faker.image.urlLoremFlickr()} alt="image 1" className="h-full w-full object-cover" />
                  </div>
                  <div className=" aspect-square overflow-hidden">
                    <img src={faker.image.urlLoremFlickr()} alt="image 2" className="h-full w-full object-cover" />
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>

        {/* right sidebar */}
        <aside className="max-h-screen w-[300px] flex flex-col border-l border-gray-200 bg-white">
          <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
            <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
              <FiUsers className="h-6 w-6 stroke-current text-gray-400" />
              <span className="text-sm font-semibold leading-6">Invite</span>
            </button>
            <button className="flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white">
              Publish
            </button>
          </div>

          <div className="flex flex-col overflow-y-auto">
            <div className="flex itme-center justify-between border-b border-gray-200 px-4 py-3">
              <span className="text-sm font-semibold">Selector</span>
              <span className="text-sm text-gray-400">Inheriting {" "} <span className="font-medium text-gray-900">2 Selector</span></span>
            </div>

            <div className="border-b border-gray-200 px-6 py-4">
              <button className="flex items-center justify-between w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5">
                <div className="flex items-center gap-x-2">
                  <span className="rounded-lg bg-white p-1 shadow">
                    <BiDesktop className="h-6 w-6 stroke-current" />
                  </span>
                  <span className="rounded-lg bg-blue-100 py-1 px-3 text-sm font-semibold text-blue-600">
                    H1 - Hero title
                  </span>
                </div>
                <BsChevronDown className="h-6 w-6 stroke-current text-gray-400" />
              </button>
              <div className="mt-2 text-xs text-gray-400">
                1 on this page, 7 on other pages
              </div>
            </div>

            <Accordion title={"Layout"}>
              <div className="flex items-center justify-between">
                <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                  <BsAlignBottom className="h-6 w-6 stroke-current text-gray-400" />
                </button>
                <button>
                  <BsAlignCenter className="h-6 w-6 stroke-current text-gray-400" />
                </button>
                <button>
                  <BsAlignStart className="h-6 w-6 stroke-current text-gray-400" />
                </button>
                <button>
                  <BsAlignEnd className="h-6 w-6 stroke-current text-gray-400" />
                </button>
                <button>
                  <BsAlignMiddle className="h-6 w-6 stroke-current text-gray-400" />
                </button>
                <button>
                  <BsAlignTop className="h-6 w-6 stroke-current text-gray-400" />
                </button>
              </div>
            </Accordion>
            
            <Accordion title={"Spacing"}>
              <div className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-8 px-10">
                <span className="absolute top-2 left-2 uppercase text-gray-400 text-xs">Margin</span>
                <span className="absolute bottom-10 right-12 uppercase text-gray-400 text-xs">Padding</span>
                <div className="relative w-full">
                  {/* top */}
                  <div className="absolute inset-x-0 top-0 flex flex-col gap-2 -translate-y-1/2 items-center justify-center">
                    <input type="text" defaultValue={20} className="w-4 h-4 text-sm outline-none text-center" />
                    <div className="h-2 w-2 border-2 border-blue-600 bg-white"/>
                    <input type="text" defaultValue={0} className="w-4 h-4 text-sm outline-none text-center" />
                  </div>
                  {/* bottom */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 translate-y-1/2 items-center justify-center">
                    <input type="text" defaultValue={20} className="w-4 h-4 text-sm outline-none text-center" />
                    <div className="h-2 w-2 border-2 border-blue-600 bg-white"/>
                    <input type="text" defaultValue={0} className="w-4 h-4 text-sm outline-none text-center" />
                  </div>
                  {/* right */}
                  <div className="absolute inset-y-0 right-0 flex gap-2 translate-x-1/2 items-center justify-center">
                    <input type="text" defaultValue={20} className="w-4 h-4 text-sm outline-none" />
                    <div className="h-2 w-2 border-2 border-blue-600 bg-white"/>
                    <input type="text" defaultValue={0} className="w-4 h-4 text-sm outline-none" />
                  </div>
                  {/* left */}
                  <div className="absolute inset-y-0 left-0 flex gap-2 -translate-x-1/2 items-center justify-center">
                    <input type="text" defaultValue={20} className="w-4 h-4 text-sm outline-none" />
                    <div className="h-2 w-2 border-2 border-blue-600 bg-white"/>
                    <input type="text" defaultValue={0} className="w-4 h-4 text-sm outline-none" />
                  </div>


                  
                  <div className="h-24 w-full rounded-xl border-2 border-blue-600 px-10 py-8">
                    <div className="h-full w-full rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            </Accordion>

            <Accordion title={"Size"}>
              <div className="grid grid-cols-2 gap-4">
                {/* width */}
                <div className="relative">
                  <span className="text-sm text-gray-400 border-r absolute flex items-center inset-y-0 px-4 pointer-events-auto">
                    W
                  </span>
                  <input 
                    type="text" 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6 outline-none"
                    defaultValue={"Auto"}
                    />
                </div>

                {/* height */}
                <div className="relative">
                  <span className="text-sm text-gray-400 border-r absolute flex items-center inset-y-0 px-4 pointer-events-auto">
                    H
                  </span>
                  <input 
                    type="text" 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6 outline-none"
                    defaultValue={"Auto"}
                    />
                </div>

                {/* min-width */}
                <div className="relative">
                  <span className="text-sm text-gray-400 border-r absolute flex items-center inset-y-0 px-4 pointer-events-auto">
                    Min W
                  </span>
                  <input 
                    type="text" 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6 outline-none"
                    defaultValue={"Auto"}
                    />
                </div>

                {/* min-height */}
                <div className="relative">
                  <span className="text-sm text-gray-400 border-r absolute flex items-center inset-y-0 px-4 pointer-events-auto">
                    Min H
                  </span>
                  <input 
                    type="text" 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6 outline-none"
                    defaultValue={"Auto"}
                    />
                </div>

                {/* max-width */}
                <div className="relative">
                  <span className="text-sm text-gray-400 border-r absolute flex items-center inset-y-0 px-4 pointer-events-auto">
                    Max W
                  </span>
                  <input 
                    type="text" 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6 outline-none"
                    defaultValue={"Auto"}
                    />
                </div>

                {/* max-height */}
                <div className="relative">
                  <span className="text-sm text-gray-400 border-r absolute flex items-center inset-y-0 px-4 pointer-events-auto">
                    Max H
                  </span>
                  <input 
                    type="text" 
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6 outline-none"
                    defaultValue={"Auto"}
                    />
                </div>

                <div className="col-span-2">
                  <div className="relative flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 text-right">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-400">Overflow</span>
                    </div>
                    <div className="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
                      <BsEyeFill className="w-6 h-6 stroke-current text-gray-400" />
                      <span>Visible</span>
                    </div>

                    <div className="flex items-center">
                      <BsChevronDown className="h-6 w-6 stroke-current text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion title={"Typography"}>

            </Accordion>
            <Accordion title={"Position"}>

            </Accordion>
            <Accordion title={"Border"}>

            </Accordion>
            <Accordion title={"Background"}>

            </Accordion>
          </div>
        </aside>
      </div>
    </>
  )
}

export default App
