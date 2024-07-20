// src/firebase/expenses.js
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

// Define the collection reference only once
const expensesCollection = collection(db, 'expenses');

export const addExpense = async (userId, expense) => {
  try {
    if (!userId || !expense) {
      throw new Error('Invalid user ID or expense data');
    }

    await addDoc(expensesCollection, { ...expense, userId });
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error; // Allow handling errors upstream
  }
};

export const fetchExpenses = async (userId) => {
  try {
    if (!userId) {
      throw new Error('Invalid user ID');
    }

    const q = query(expensesCollection, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    // Return documents mapped to an array of expense objects
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return []; // Return empty array on error
  }
};

export const calculateTotalBalance = async (userId) => {
  try {
    if (!userId) {
      throw new Error('Invalid user ID');
    }

    const expenses = await fetchExpenses(userId);
    // Adjust calculation based on your expense data schema
    return expenses.reduce((total, expense) => total + (expense.type === 'income' ? expense.amount : -expense.amount), 0);
  } catch (error) {
    console.error('Error calculating total balance:', error);
    return 0; // Return 0 on error
  }
};
