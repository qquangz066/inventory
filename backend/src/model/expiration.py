from sqlalchemy import Column, Integer, ForeignKey, Date
from sqlalchemy.orm import relationship

from db.base_class import Base


class Expiration(Base):
    __tablename__ = 'expiration'
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('product.id'), nullable=False)
    expire = Column(Date, index=True, nullable=False)
    product = relationship('Product')
