const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-4 m-4 ">Contact Us page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className=" border border-black rounded-md m-2 p-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black rounded-md m-2 p-2"
        />
        <button className="border rounded-md text-white bg-gray-800 m-2 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
