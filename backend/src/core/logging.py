import logging

from core import config


def setup_logging():
    # logging configuration
    logger_list = ['fastapi', 'uvicorn', 'sqlalchemy.engine.base.Engine']

    formatter = logging.Formatter('%(asctime)s %(levelname)-8s [%(filename)s:%(funcName)s:%(lineno)d] %(message)s')
    logging_level = logging.INFO if config.DEBUG else logging.ERROR
    logger = logging.getLogger()
    logger.setLevel(logging_level)

    file_handler = logging.FileHandler('log.txt')
    file_handler.setFormatter(formatter)
    file_handler.addFilter(lambda record: record.levelno >= logging_level)
    logger.addHandler(file_handler)

    logging.getLogger('sqlalchemy.engine.base.Engine').propagate = False

    for name in logger_list:
        logger = logging.getLogger(name)
        logger.handlers = []
        logger.addHandler(file_handler)
