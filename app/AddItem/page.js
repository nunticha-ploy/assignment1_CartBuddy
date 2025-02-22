//create add item page
'use client';
import { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from 'next/link';

function AddItem() {
    // Define state for input, message, and error
    const [input, setInput] = useState('');
    const [message, setMessage] = useState([]);
    const [error, setError] = useState('');

    // Function triggered when the user submits the form
    const handleSubmit = (event) => {
        event.preventDefault();

        //check user input
        if (input.trim() === '') {
            setError('Item cannot be empty!');
            setMessage('');
        } else {
            setMessage(prevMessages => [`"${input}" was added to your list!`, ...prevMessages]);
            setError('')
            setInput('');
        }
    };

    // Function triggered when the user types in the input field
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className={styles.background}>
            <div className={styles.addItemPage}>
                {/* Add logo img */}
                <div className={styles.logo}>
                    <Image
                        className={styles.logo}
                        src="/CartBuddyLogo.png"
                        alt="Cart Buddy Logo"
                        width={180}
                        height={38}
                        priority
                    />
                </div>

                {/* Heading */}
                <h1 className={styles.heading}>Add New Item</h1>

                {/* Form to add a new item  */}
                <form onSubmit={handleSubmit}>
                    <input type="text" value={input} onChange={handleInputChange} placeholder="Enter item name" />
                    <button type="submit" >Add</button>
                </form>

                {/* Display error message */}
                {error && <div>{error}</div>}

                {/* Display item, using map to iterate through the array */}
                {message && <div>{message.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}</div>}

                {/* create buttons which link to another pages */}
                <div className={styles.buttonContainer}>
                    <Link href="/ShoppingList"><button>My Shopping List</button></Link>
                </div>

            </div>
        </div >
    );
}

// Export this component 
export default AddItem;