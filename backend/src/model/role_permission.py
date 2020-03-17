from sqlalchemy import Column, Integer, ForeignKey

from db.base_class import Base


class RolePermission(Base):
    __tablename__ = 'role_permission'
    role_id = Column(
        Integer,
        ForeignKey('role.id'),
        primary_key=True)

    permission_id = Column(
        Integer,
        ForeignKey('permission.id'),
        primary_key=True)
