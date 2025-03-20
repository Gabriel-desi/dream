// function Last() {
//   return (
//     <div className="bg-black pl-5 ">
//       <div className="flex ">
//         <h1 className="text-white text-3xl font-black">Dream Homes</h1>
//         <ul className="text-white pl-[8rem]">
//           <li className="font-medium text-2xl">Services</li>
//           <li>Billboard</li>
//           <li>Invitation</li>
//           <li>Brochure</li>
//         </ul>
//         <ul className="text-white pl-[3rem]">
//           <li className="font-medium text-2xl">Futher links</li>
//           <li>Terms and conditions</li>
//           <li>List of jobs</li>
//           <li>News</li>
//         </ul>
//         <ul className="text-white pl-[3rem]">
//           <li className="font-medium text-2xl">Get in Touch</li>
//           <li>2443 Oak Ridge Omaha, Qa </li>
//           <li>2078767452</li>
//           <li>support@site.com</li>
//         </ul>
//       </div>
//       <p className="text-white text-[0.7rem] items-center flex justify-center">
//         Copyright © 2022 Dream Homes Powered by Dream homes
//       </p>
//     </div>
//   );
// }

// export default Last;
function Last() {
  return (
    <div className="bg-black px-5 py-8">
      <div className="flex flex-wrap gap-8 md:gap-16 sm:gap-8">
        <h1 className="text-white text-3xl font-black w-full md:w-auto">
          Dream Homes
        </h1>
        <ul className="text-white w-[150px]">
          <li className="font-medium text-2xl mb-2">Services</li>
          <li>Billboard</li>
          <li>Invitation</li>
          <li>Brochure</li>
        </ul>
        <ul className="text-white w-[150px]">
          <li className="font-medium text-2xl mb-2">Further links</li>
          <li>Terms and conditions</li>
          <li>List of jobs</li>
          <li>News</li>
        </ul>
        <ul className="text-white w-[180px]">
          <li className="font-medium text-2xl mb-2">Get in Touch</li>
          <li>2443 Oak Ridge Omaha, Qa</li>
          <li>2078767452</li>
          <li>support@site.com</li>
        </ul>
      </div>
      <p className="text-white text-[0.7rem] flex justify-center mt-5 text-center">
        Copyright © 2022 Dream Homes Powered by Dream homes
      </p>
    </div>
  );
}

export default Last;
