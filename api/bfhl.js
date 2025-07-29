// const express = require('express');
// const app = express();

// app.use(express.json());

// const PORT = process.env.PORT || 3000;

// app.post('/bfhl', (req, res) => {
//     const input = req.body.data;

//     const even_numbers = [];
//     const odd_numbers = [];
//     const alphabets = [];
//     const special_characters = [];
//     let sum = 0;
//     let alpha_concat = '';

//     input.forEach(item => {
//         const strItem = String(item);
//         if (!isNaN(strItem)) {
//             const num = parseInt(strItem);
//             if (!isNaN(num)) {
//                 sum += num;
//                 (num % 2 === 0 ? even_numbers : odd_numbers).push(strItem);
//             }
//         } else if (/^[a-zA-Z]+$/.test(strItem)) {
//             alphabets.push(strItem.toUpperCase());
//             alpha_concat += strItem;
//         } else {
//             special_characters.push(strItem);
//         }
//     });

//     // alternating caps for reversed alphabet string
//     const reversed = alpha_concat.split('').reverse();
//     let concat_string = '';
//     reversed.forEach((char, idx) => {
//         concat_string += idx % 2 === 0
//             ? char.toUpperCase()
//             : char.toLowerCase();
//     });

//     const response = {
//         is_success: true,
//         user_id: "uday_malhotra_31012004",  
//         email: "uday919.be22@chitkara.edu.in",
//         roll_number: "2210990919",
//         odd_numbers,
//         even_numbers,
//         alphabets,
//         special_characters,
//         sum: String(sum),
//         concat_string
//     };

//     res.status(200).json(response);
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const input = req.body.data || [];

  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let alpha_concat = '';

  input.forEach(item => {
    const strItem = String(item);
    if (!isNaN(strItem)) {
      const num = parseInt(strItem);
      if (!isNaN(num)) {
        sum += num;
        (num % 2 === 0 ? even_numbers : odd_numbers).push(strItem);
      }
    } else if (/^[a-zA-Z]+$/.test(strItem)) {
      alphabets.push(strItem.toUpperCase());
      alpha_concat += strItem;
    } else {
      special_characters.push(strItem);
    }
  });

  const reversed = alpha_concat.split('').reverse();
  let concat_string = '';
  reversed.forEach((char, idx) => {
    concat_string += idx % 2 === 0
      ? char.toUpperCase()
      : char.toLowerCase();
  });

  const response = {
    is_success: true,
    user_id: "uday_malhotra_031012004",
    email: "uday919.be22@chitkara.edu.in",
    roll_number: "2210990919",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: String(sum),
    concat_string
  };

  res.status(200).json(response);
}
