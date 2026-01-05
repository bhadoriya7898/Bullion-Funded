// const Tick = () => (
//   <div className="w-[18px] h-[18px] rounded-full bg-[#2ECC71] flex items-center justify-center text-white text-[12px]">
//     ✓
//   </div>
// );

// const ComparisonGrid = ({ features, plansData }) => {
//   return (
//     <div className="w-full border border-[#2A2A2A] overflow-x-auto">

//       {/* HEADER */}
//       <div className="grid grid-cols-[250px_repeat(6,1fr)]">
//         <div className="h-[52px] flex items-center px-4 text-[13px] font-medium text-[#BDBDBD] border-b border-[#2A2A2A]">
//           Account Size
//         </div>

//         {plansData.map((plan, i) => (
//           <div
//             key={i}
//             className={`h-[52px] flex items-center justify-center text-[13px] font-medium border-b border-[#2A2A2A]
//               ${i % 2 === 0 ? "bg-[#0F0F0F] text-white" : "bg-[#82F352] text-black"}`}
//           >
//             {plan.accountSize}
//           </div>
//         ))}
//       </div>

//       {/* FEATURE ROWS */}
//       {features.map((feature) => (
//         <div
//           key={feature.key}
//           className="grid grid-cols-[250px_repeat(6,1fr)]"
//         >
//           <div className="h-[50px] flex items-center px-4 text-[13px] text-[#BDBDBD] border-b border-[#2A2A2A]">
//             {feature.label}
//           </div>

//           {plansData.map((plan, i) => {
//             const value = plan.values[feature.key];

//             return (
//               <div
//                 key={i}
//                 className={`h-[50px] flex items-center justify-center text-[13px] font-medium border-b border-[#2A2A2A]
//                   ${i % 2 === 0 ? "bg-[#0F0F0F] text-white" : "bg-[#82F352] text-black"}`}
//               >
//                 {typeof value === "boolean" ? value && <Tick /> : value}
//               </div>
//             );
//           })}
//         </div>
//       ))}

//       {/* CTA ROW */}
//       <div className="grid grid-cols-[250px_repeat(6,1fr)]">
//         <div />

//         {plansData.map((_, i) => (
//           <div
//             key={i}
//             className={`h-[60px] flex items-center justify-center
//               ${i % 2 === 0 ? "bg-[#0F0F0F]" : "bg-[#82F352]"}`}
//           >
//             <button className="h-[36px] px-5 rounded-[8px] bg-black text-white text-[13px] font-medium">
//               Start Challenge
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ComparisonGrid;
