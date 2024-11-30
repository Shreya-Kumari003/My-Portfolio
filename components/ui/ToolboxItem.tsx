// import React, { Fragment } from "react";
// import { toolbox } from "@/data";
// import { TechIcon } from "./TechIcon";
// import { twMerge } from "tailwind-merge";

// const ToolboxItem = ({
//   items,
//   className,
//   itemsWrapperClassName,
// }: {
//   items: {
//     title: string;
//     iconType: string;
//   }[];
//   className?: string;
//   itemsWrapperClassName?: string;
// }) => {
//   return (
//     <div className={twMerge("max-w-[400px] py-2.5", className)}>
//       <div className="flex">
//         <div className={twMerge("flex flex-none", itemsWrapperClassName)}>
//           {[...new Array(2)].fill(0).map((_, index) => (
//             <Fragment key={index}>
//               {items.map((item) => (
//                 <div
//                   key={item.title}
//                   className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white-100 rounded-lg mr-3"
//                 >
//                   <TechIcon component={item.iconType} />
//                   <span className="font-semibold">{item.title}</span>
//                 </div>
//               ))}
//             </Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToolboxItem;
