// src/firebase/expenses.js
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase'; // Make sure this path is correct

const expensesCollection = collection(db, 'expenses');

export const addExpense = async (userId, expense) => {
  try {
    if (!userId || !expense) {
      throw new Error('Invalid user ID or expense data');
    }

    await addDoc(expensesCollection, { ...expense, userId });
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error;
  }
};

export const fetchExpenses = async (userId) => {
  try {
    if (!userId) {
      throw new Error('Invalid user ID');
    }

    const q = query(expensesCollection, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return [];
  }
};

export const calculateTotalBalance = async (userId) => {
  try {
    if (!userId) {
      throw new Error('Invalid user ID');
    }

    const expenses = await fetchExpenses(userId);
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  } catch (error) {
    console.error('Error calculating total balance:', error);
    return 0;
  }
};
