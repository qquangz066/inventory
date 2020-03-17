from sqlalchemy import Column, Integer, String, ForeignKey, DECIMAL
from sqlalchemy.orm import relationship

from db.base_class import Base


class Product(Base):
    __tablename__ = 'product'
    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey('category.id'), index=True)
    department_id = Column(Integer, ForeignKey('department.id'), index=True)
    name = Column(String(255), index=True, nullable=False)
    upc = Column(String(255), index=True, unique=True, nullable=False)
    aisle = Column(String(255))
    bay = Column(String(255))
    description = Column(String(255))
    description_2 = Column(String(255))
    expiration_count = Column(Integer, default=0)
    physical_count = Column(Integer, default=0)
    cost = Column(DECIMAL(10, 2), default=0)
    category = relationship('Category')
    department = relationship('Department')
    expiration = relationship('Expiration', cascade='all, delete-orphan', order_by='asc(Expiration.expire)')
