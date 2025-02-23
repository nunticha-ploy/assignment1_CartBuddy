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
        //Prevents the default browser action of refreshing the page when submitting the form
        event.preventDefault();

        //Check user input
        if (input.trim() === '') {
            setError('Item cannot be empty!');
            setMessage('');
        } else {
            //Converts the stored data from text to an array and adds the new item to the beginning of the array
            const prevMessages = JSON.parse(localStorage.getItem('shoppingList')) || [];
            const updatedMessages = [input, ...prevMessages];

            //Saves the updated list back to local storage and converts the array into string
            localStorage.setItem('shoppingList', JSON.stringify(updatedMessages));

            setMessage(prev => [`"${input}" was added to your list!`, ...prev]);
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

                <div className={styles.card2}>
                    {/* Heading */}
                    <h1>Add New Item</h1>

                    {/* Form to add a new item  */}
                    <form onSubmit={handleSubmit}>
                        <input type="text" className={styles.inputField} value={input} onChange={handleInputChange} placeholder="Enter item name" />
                        <button type="submit" className={styles.addButton} >Add</button>
                    </form>

                    {/* Display error message */}
                    {error && <div>{error}</div>}

                    {/* Display item, using map to iterate through the array */}
                    {message && <div>{message.map((msg, index) => (
                        <div key={index} className={styles.listItem}>{msg}</div>
                    ))}</div>}

                </div>
                {/* create buttons which link to another pages */}
                <div className={styles.smallButton}>
                    <Link href="/ShoppingList"><button>My Shopping List</button></Link>
                    <Link href="/"><button>Home</button></Link>
                </div>
            </div>
        </div >
    );
}

// Export this component 
export default AddItem;