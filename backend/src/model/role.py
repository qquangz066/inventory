from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from db.base_class import Base


class Role(Base):
    __tablename__ = 'role'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    description = Column(String(255))
    permissions = relationship('Permission', secondary='role_permission')
