const Nav = () => {
  return (
    <div className="flex divide-x">
      <h5 className="navItem text-orange-600 hover:bg-orange-600">
        আমাদের সম্পর্কিত
      </h5>
      <h6 className="navItem text-rose-600 hover:bg-rose-600">
        অধীনস্থ দপ্তর/অফিস/সংস্থা
      </h6>
      <h6 className="navItem text-cyan-600 hover:bg-cyan-600">
        প্রকল্প/কর্মসূচি{" "}
      </h6>
      <h6 className="navItem text-violet-600 hover:bg-violet-700">গ্যালারি </h6>
      <h6 className="navItem text-amber-600 hover:bg-amber-600">
        আইন/নীতিমালা
      </h6>
      <h6 className="navItem text-lime-600 hover:bg-lime-600">ই-সেবা</h6>
      <h6 className="navItem text-blue-600 hover:bg-blue-600">
        যোগাযোগ ও মতামত
      </h6>
    </div>
  );
};

export default Nav;
