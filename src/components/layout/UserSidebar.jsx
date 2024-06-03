import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { IoLibrary } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const sideLinks = [
  {
    icon: <FaBookBookmark />,
    title: "Books",
    to: "/admin/books",
    isAdminOnly: true,
  },
  {
    icon: <FaUsers />,
    title: "Students",
    to: "/admin/students",
    isAdminOnly: true,
  },
  {
    icon: <FaListUl />,
    title: "All Burrows",
    to: "/admin/all-burrows",
    isAdminOnly: true,
  },
  {
    icon: <IoLibrary />,
    title: "My Books",
    to: "/my-books",
  },
  {
    icon: <CgProfile />,
    title: "Profile",
    to: "/profile",
  },
  {
    icon: <RiAdminFill />,
    title: "Admins",
    to: "/admin/admins",
    isAdminOnly: true,
  },
];

export const UserSidebar = () => {
  const { user } = useSelector((state) => state.userInfo);

  const list =
    user.role === "admin"
      ? sideLinks
      : sideLinks.filter((itm) => !itm.isAdminOnly);

  return (
    <Stack gap={1}>
      {list.map(({ title, to, icon }) => (
        <Link key={title} to={to} className="p-2 nav-link">
          {icon} {title}
        </Link>
      ))}
    </Stack>
  );
};
