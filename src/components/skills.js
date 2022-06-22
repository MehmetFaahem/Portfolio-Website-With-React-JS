import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Skills() {
    return (
        <div className="bg-white ml-20 mr-20 mb-16 mt-20" id="Skills">

            <div className="flex flex-row items-center justify-between">
                <h1 className="text-4xl font-extrabold">Skills</h1>
                <Link to='/'>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 4, mb: 2 }}
                    >
                        Go Back
                    </Button>
                </Link>
            </div>
            <div className="border-blue-600 border-2 shadow-2xl shadow-black mt-20 p-10">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">React</h2>
                    <p>I have been working on React JS since 6 Months. But I have gathered enormous knowledg on React JS</p>
                </div>
            </div>
            <div className="border-blue-600 border-2 shadow-2xl shadow-black mt-10 p-10">
                <div className="flex-row">
                    <h2 className="text-xl font-bold">React Native</h2>
                    <p>I have been working on React JS since 6 Months. But I have gathered enormous knowledg on React JS</p>
                </div>
            </div>
            <div className="border-blue-600 border-2 shadow-2xl shadow-black mt-10 p-10">
                <div className="flex-row">
                    <h2 className="text-xl font-bold">FireBase</h2>
                    <p>I have been working on React JS since 6 Months. But I have gathered enormous knowledg on React JS</p>
                </div>
            </div>
            <div className="border-blue-600 border-2 shadow-2xl shadow-black mt-10 p-10">
                <div className="flex-row">
                    <h2 className="text-xl font-bold">GraphQL</h2>
                    <p>I have been working on React JS since 6 Months. But I have gathered enormous knowledg on React JS</p>
                </div>
            </div>
            <div className="border-blue-600 border-2 shadow-2xl shadow-black mt-10 p-10">
                <div className="flex-row">
                    <h2 className="text-xl font-bold">MongoDB</h2>
                    <p>I have been working on React JS since 6 Months. But I have gathered enormous knowledg on React JS</p>
                </div>
            </div>
            <div className="border-blue-600 border-2 shadow-2xl shadow-black mt-10 p-10">
                <div className="flex-row">
                    <h2 className="text-xl font-bold">HTML</h2>
                    <p>I have been working on React JS since 6 Months. But I have gathered enormous knowledg on React JS</p>
                </div>
            </div>
            <div className="border-blue-600 border-2 shadow-2xl shadow-black mt-10 p-10">
                <div className="flex-row">
                    <h2 className="text-xl font-bold">CSS</h2>
                    <p>I have been working on React JS since 6 Months. But I have gathered enormous knowledg on React JS</p>
                </div>
            </div>
            <Link to='/'>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 4, mb: 2 }}
                >
                    Go Back
                </Button>
            </Link>
        </div>
    )
}