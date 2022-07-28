module.exports = {
  getText: async (req, res) => {
    const { text } = req.query;
    try {
      if (text === "" || !text) {
        throw new Error("No text");
      }

      const newText = text.split("").reverse().join("");

      if (text.toLowerCase() === newText.toLowerCase()) {
        return res.status(200).json({
          text: newText,
          palindrome: true,
        });
      }

      return res.status(200).json({ text: newText, palindrome: false });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
};
