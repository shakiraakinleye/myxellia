import { User } from "@/types/user";

interface Props {
  user: User;
}

const UserTooltip = ({ user }: Props) => {
  const { firstName, lastName, email } = user;
  return (
    <div className="space-y-0.5">
      <p className="font-semibold text-sm font-playfair capitalize">
        {firstName} {lastName}
      </p>
      <p className="text-muted-100 text-xs">{email}</p>
    </div>
  );
};

export default UserTooltip;
