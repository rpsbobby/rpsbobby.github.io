let text = document.getElementById('details');

let copyToClipboard = async () => {
   try {
      await navigator.clipboard.writeText('robert.szlufik123@gmail.com');
      alert('Copied to Clipboard ');
   } catch (err) {
      console.error('Failed to copy: ', err);
   }
};

text.addEventListener('click', copyToClipboard);
