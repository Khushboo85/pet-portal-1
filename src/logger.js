
export async function logger(data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tag: data.tag, msg : data.msg }),
    };
    
    await fetch(
        `http://localhost:4001/api/addLog`,
        requestOptions
    );
}