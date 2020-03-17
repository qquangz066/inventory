import logging
import sys

from core import config


def setup_logging():
    formatter = logging.Formatter('%(asctime)s %(levelname)-8s [%(filename)s:%(funcName)s:%(lineno)d] %(message)s')
    logging_level = logging.INFO if config.DEBUG else logging.ERROR
    logger = logging.getLogger()
    logger.setLevel(logging_level)

    stream_err_handler = logging.StreamHandler(sys.stderr)
    stream_err_handler.setFormatter(formatter)
    stream_err_handler.addFilter(lambda record: record.levelno > logging.INFO)
    logger.addHandler(stream_err_handler)

    stream_handler = logging.StreamHandler(sys.stdout)
    stream_handler.setFormatter(formatter)
    stream_handler.addFilter(lambda record: record.levelno <= logging.INFO)
    logger.addHandler(stream_handler)

    logging.getLogger('sqlalchemy.engine.base.Engine').handlers = []

    # file_handler = logging.FileHandler('log.txt')
    # file_handler.setFormatter(formatter)
    # logger.addHandler(file_handler)
