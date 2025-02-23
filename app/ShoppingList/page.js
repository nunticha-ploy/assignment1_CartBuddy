//create my shopping list page
//tells Next.js that this file works in the browser (not the server)
'use client';
//react hooks that help manage data and actions
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from 'next/link';

//shopping list main function
function ShoppingList() {

    //message--stores the list of shopping items as an array
    //setMessage--function upadate message
    //useState--starts as an empty array
    const [message, setMessage] = useState([]);

    //get list data from local storage using 'shoppingList' as key 
    //converts data from a JSON string to an array
    //no data = empty array
    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('shoppingList')) || [];

        //put saved list into message
        setMessage(savedMessages);
    }, []);

    //deleyes an item when clicked delete button
    const handleDelete = (index) => {
        //makes new list without the item at the clicked position and make a new list without the item a the clicked position
        const updatedMessages = message.filter((_, i) => i !== index);
        //update list 
        setMessage(updatedMessages);

        //saves the new list
        localStorage.setItem('shoppingList', JSON.stringify(updatedMessages));
    };

    //adds or remove (done) when the checkbox is clicked
    const handleCheckBox = (index) => {
        //copy the list 
        const updatedMessages = [...message];
        //checks if the item has (done) or not // add and remove on condition
        updatedMessages[index] = updatedMessages[index].includes(' (done)')
            ? updatedMessages[index].replace(' (done)', '')
            : updatedMessages[index] + ' (done)';

        //update list 
        setMessage(updatedMessages);
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
                    <h1 className={styles.heading}>My Shopping List</h1>

                    {/* Display item which add from add item page  */}
                    <div>
                        {/* Display item or display "No items in your shopping list"  */}
                        {/* Create new array using map  */}
                        {/* Display and call the function"  */}
                        {message.length > 0 ? (
                            message.map((item, index) => (
                                <div key={index} >
                                    <input
                                        type="checkbox"
                                        checked={item.includes(' (done)')}
                                        onChange={() => handleCheckBox(index)}
                                    />
                                    <span className={styles.listItem} style={{ textDecoration: item.includes(' (done)') ? 'line-through' : 'none' }}>
                                        {item.replace(' (done)', '')}
                                    </span>

                                    <button className={styles.addButton} onClick={() => handleDelete(index)}>Delete</button>
                                </div>
                            ))
                        ) : (
                            <div>No items in your shopping list.</div>
                        )}

                    </div>
                </div>
                {/* create buttons which link to another pages */}
                <div className={styles.smallButton}>
                    <Link href="/AddItem"><button>Add New Item</button></Link>
                    <Link href="/"><button>Home</button></Link>
                </div>
            </div>
        </div >
    );
}

// Export this component 
export default ShoppingList;