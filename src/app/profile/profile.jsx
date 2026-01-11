export default async function ProfilePage() {
  const res = await fetch("https://fakestoreapi.com/users/3", { cache: "no-store" });
  const user = await res.json();

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border">
        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-blue-600">
          {user.name.firstname[0].toUpperCase()}
        </div>
        <h2 className="text-2xl font-bold text-center capitalize">{user.name.firstname} {user.name.lastname}</h2>
        <div className="mt-6 space-y-3 text-gray-600">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      </div>
    </div>
  );
}