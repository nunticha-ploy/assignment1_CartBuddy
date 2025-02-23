//create my shopping list page
'use client';
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Image from "next/image";

function ShoppingList() {

    const [message, setMessage] = useState([]);

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('shoppingList')) || [];

        setMessage(savedMessages);
    }, []);

    const handleDelete = (index) => {
        const updatedMessages = message.filter((_, i) => i !== index);
        setMessage(updatedMessages);
        localStorage.setItem('shoppingList', JSON.stringify(updatedMessages));
    };

    const handleCheckBox = (index) => {
        const updatedMessages = [...message];
        updatedMessages[index] = updatedMessages[index].includes(' (done)')
            ? updatedMessages[index].replace(' (done)', '')
            : updatedMessages[index] + ' (done)';

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

                {/* Heading */}
                <h1 className={styles.heading}>My Shopping List</h1>

                {/* Display item which add from add item page  */}
                <div>
                    {message.length > 0 ? (
                        message.map((item, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    checked={item.includes(' (done)')}
                                    onChange={() => handleCheckBox(index)}
                                />
                                <span style={{ textDecoration: item.includes(' (done)') ? 'line-through' : 'none' }}>
                                    {item.replace(' (done)', '')}
                                </span>

                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <div>No items in your shopping list.</div>
                    )}
                </div>
            </div>
        </div >
    );
}

// Export this component 
export default ShoppingList;