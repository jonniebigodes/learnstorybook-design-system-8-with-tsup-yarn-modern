import styled from '@emotion/styled';

import { Avatar, sizes } from '../Avatar/Avatar';

import { color, typography } from '../shared/styles';

const UserAvatar = styled(Avatar)`
  box-shadow: ${color.lightest} 0 0 0 2px;
  display: block;
`;

const UserEllipses = styled.li`
  display: inline-flex;
  font-size: ${typography.size.s1}px;
  color: ${color.mediumdark};
  margin-left: 6px;
  white-space: nowrap;
`;

const User = styled.li`
  display: inline-flex;
`;

const Users = styled.ul`
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  vertical-align: top;
  margin: 0;
  padding: 0;
  list-style: none;

  ${User} {
    position: relative;

    &:not(:first-child) {
      margin-left: -6px;
    }
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 1;
    }
  }
`;

interface Avatar {
  id?: string;
  name?: string;
  avatarUrl?: string | null;
}

export interface AvatarListProps
  extends React.HTMLAttributes<HTMLUListElement> {
  /** Whether the avatars are in a loading state */
  loading?: boolean;
  /** Array of user objects */
  users?: Avatar[];
  /** Total count of users (if not all users are passed) */
  userCount?: number | null;
  /** Size of the avatar */
  size?: keyof typeof sizes;
}

export function AvatarList({
  loading = false,
  users = [],
  userCount = null,
  size = 'medium',
  ...props
}: AvatarListProps) {
  const count = userCount || users.length;
  return (
    <Users aria-label='users' {...props}>
      {users.slice(0, 3).map(({ id, name, avatarUrl }) => (
        <User key={id}>
          <UserAvatar
            size={size}
            username={name ?? ''}
            src={avatarUrl || undefined}
            loading={loading}
          />
        </User>
      ))}
      {count > 3 && (
        <UserEllipses aria-label={`${count - 3} more user(s)`}>
          &#43; {count - 3}
        </UserEllipses>
      )}
    </Users>
  );
}
