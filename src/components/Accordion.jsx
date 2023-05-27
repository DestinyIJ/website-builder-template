import { BsChevronDown } from "react-icons/bs"

const Accordion = ({ title, children}) => {
  return (
    <details className="group">
        <summary className="flex items-center justify-between border-b border-gray-200 px-6 py-4 cursor-pointer list-none">
            <span className="text-sm font-semibold capitalize">{title}</span>
            <BsChevronDown className="h-6 w-6 stroke-current text-gray-400 group-open:rotate-[180deg] transition-transform" />
        </summary>

        <div className="px-6 py-4 border-b border-gray-200">
         {children}
        </div>
    </details>
  )
}

export default Accordion