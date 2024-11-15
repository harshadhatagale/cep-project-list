import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const filePath = path.join(process.cwd(), 'public', 'data.json');

  try {
    // Read existing data from the file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    // Parse the new data from the request body
    const newEntry = await request.json();

    // Add the new entry to the data
    const updatedData = [...data, newEntry];

    // Write updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');

    return new Response(JSON.stringify({ message: 'Data updated successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to update the file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
