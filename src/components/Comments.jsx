"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageBox from "./MessageBox";

const Comments = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  let [updater, setUpdater] = useState(false);
  let [messages, setMessages] = useState([]);

  const handleChange = async (event) => {
    setData((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmitMessage = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/tagsMessage", data);
      toast.success("Message is created successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setData({
        name: "",
        email: "",
        message: "",
        website: "",
      });
      setUpdater((pre) => !pre);
    } catch (error) {
      toast.error(error.response.data.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  React.useEffect(() => {
    const getAllMessages = async () => {
      try {
        let { data } = await axios.get(
          "http://localhost:5000/api/v1/tagsMessage"
        );
        let info = data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setMessages(info);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMessages();
  }, [updater]);

  return (
    <div className="flex flex-col gap-[30px]">
      <ToastContainer />
      <h1 className="text-[30px] font-bold">Post A Comment</h1>
      <p className="text-gray-600">
        Your email address will not be published. Required fields are marked *
      </p>

      <div>
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          name="message"
          value={data.message}
          onChange={(event) => handleChange(event)}
        ></textarea>
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Bruce Wayne"
          required
          name="name"
          value={data.name}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="email@gmail.com"
          required
          name="email"
          value={data.email}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Website
        </label>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="www.website.com"
          required
          name="website"
          value={data.website}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div class="flex items-center">
        <input
          checked
          id="checked-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="checked-checkbox"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Save my name, email, and website in this browser for the next time I
          comment.{" "}
        </label>
      </div>
      <div>
        <button
          className="w-[220px] h-[50px] cursor-pointer rounded-lg bg-[#36454F] text-white font-bold text-[22px]"
          onClick={handleSubmitMessage}
        >
          Post Comment
        </button>
      </div>

      <div className="h-[1px] w-[100%] bg-[lightGrey]"></div>

      <div className="flex flex-col gap-[40px]">
        {messages.map((item) => {
          return <MessageBox data={item} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
