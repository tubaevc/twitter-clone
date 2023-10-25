export default function Profile() {
  const { slug } = useParams;
  return <div>profile page - {slug}</div>;
}
