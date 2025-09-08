export default function Error() {
    const a = () => {
        const b: any =5;
        b();
    }
    return (<button onClick={a} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me to trigger error 
</button>)
}